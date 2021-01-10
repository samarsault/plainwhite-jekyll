---
layout: post
title:  "첫번째 커밋"
date:   2021-01-10 23:12:00 +0000
categories: diary
---
우연히 깃허브 강의를 수강했다가 깃허브 블로그까지 생성하게 되었다.
천릿길도 한걸음부터라는 마음가짐으로 첫번째 커밋을 해본다.
딱히 올릴건 없고.. 어제 작성했던 테스트케이스라도 던져놓고 가야지.(ㅋㅋ)

```java
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = { ErrorAlarmTransformer.class })
class ErrorAlarmTransformerTest {

  @Test
  @SneakyThrows
  @DisplayName("기존 처리되던 에러코드 반입이고 경고 대상인 경우 테스트")
  void test_alarm_status() {
    given(manager.getAlarmInfo(alarmKey))
        .willReturn(AlarmInfoDto.builder()
            .alarmId("alarmId")
            .stopYn(StopYnEnum.NON_STOP.getCode())
            .intvl(Integer.MAX_VALUE)
            .occurCnt(3)
            .occurRuleCd(OccurRuleEnum.MORE_THAN.getCode())
            .build());

    val realtimeSts = new AlarmRealtimeSts(3, 3);
    realtimeSts.add();
    realtimeSts.add();

    given(manager.getRealtimeSts(alarmKey))
        .willReturn(realtimeSts);

    val result = transformer.apply(input);
    assertThat(result.getAlarmInfoDtoList())
        .hasSize(1)
        .extracting(AlarmInfoDto::getAlarmId, AlarmInfoDto::getStopYn,
            AlarmInfoDto::getIntvl,
            AlarmInfoDto::getOccurCnt, AlarmInfoDto::getOccurRuleCd)
        .contains(
            tuple("alarmId", 
                StopYnEnum.NON_STOP.getCode(), 
                Integer.MAX_VALUE,
                3,
                OccurRuleEnum.MORE_THAN.getCode()
            ));

    then(manager).should(times(1))
        .getAlarmInfo(alarmKey);
    then(manager).should(times(1))
        .getRealtimeSts(alarmKey);
  }
}

```
