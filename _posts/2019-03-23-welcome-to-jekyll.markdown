---
layout: post
title:  "Integrating razorpay into your webapp"
date:   2019-03-23 21:03:36 +0530
categories: Javascript NodeJS
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse

```javascript
const Razorpay = require('razorpay');

let rzp = Razorpay({
	key_id: 'KEY_ID',
	secret: 'name'
});

// capture request
rzp.capture(payment_id, cost)
	.then(function (data) {
		return 2;
	})
```

$$
	Latex \space supported: A =
	\left[
	\begin{matrix}
	a_{11}&a_{12}&\cdots&a_{1n}\\
	a_{21}\\
	\vdots&&\ddots\\
	a_{n1}&&&a_{nn}
	\end{matrix}
	\right]
	，\mathbf{w}_i^0 = \frac{(\prod_{j=1}^na_{ij})^{\frac{1}{n}}}{\sum_{i=1}^n (\prod_{j=1}^n a_{i,j})^{\frac{1}{n}}},n=1,2,\cdots,n
$$

Inline latex supported: $\mathbf{λ_{mi}}+\mathbf{λ_{max}}$

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
