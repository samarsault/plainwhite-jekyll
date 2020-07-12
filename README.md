# plainwhite

Simplistic jekyll portfolio-style theme for writers.

**Demo**: [thelehhman.com](https://thelehhman.com)

![plainwhite theme preview](/screenshot.png)

## Installation on Github Pages

Add this line to your site's `_config.yml`:

```yaml
remote_theme: samarsault/plainwhite-jekyll
```

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "plainwhite"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: plainwhite
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install plainwhite

## Usage

The "plainwhite" key in \_config.yml is used to customize the theme data.

```yaml
plainwhite:
  name: Adam Denisov
  tagline: Developer. Designer
  date_format: "%b %-d, %Y"

  social_links:
    twitter: samarsault
    github: samarsault
    linkedIn: in/samarsault # format: locale/username
```

**Updating Placeholder Image**

The placeholder portfolio image can be replaced by the desired image by placing it as `assets/portfolio.png` in your jekyll website.

**Comments (Disqus)**

Comments on posts can be enabled by specifying your disqus_shortname under plainwhite in `_config.yml`. For example,

```yaml
plainwhite:
  disqus_shortname: games
```

**Google Analytics**

It can be enabled by specifying your analytics id under plainwhite in `_config.yml`

```yaml
plainwhite:
  analytics_id: "< YOUR ID >"
```

**Sitemap**

It can be toggled by the following line to under plainwhite in `_config.yml`

```yaml
plainwhite:
  sitemap: true
```

**Excerpts**

Excerpts can be enabled by adding the following line to your `_config.yml`

```yaml
show_excerpts: true
```

**Layouts**

- Home
- Page
- Post

**Navigation**

Navigation can be enabled by adding the following line to your `_config.yml`

```yaml
plainwhite:
  navigation:
    - title: My Work
      url: "/my-work"
    - title: Resume
      url: "/resume"
```

**Dark mode**

Dark mode can be enabled by setting the `dark_mode` flag in your `_config.yml`

The website will check the OS preferred color scheme and set the theme accordingly, the preference will then be saved in a cookie

```yaml
plainwhite:
  dark_mode: true
```

![plainwhite dark theme previe](/dark.png)

**Multiline tagline**

Tagline can be multiline in this way

```yaml
plainwhite:
  tagline: |
  First Line. 

  Second Line. 

  Third Line.
```

**Search-bar**

Search-bar can be enabled by adding the following line to `config.yml`

```yaml
plainwhite:
  search: true
```

Search is powered by [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search) Jekyll plugin. A `search.json` containing post meta and contents will be generated in site root folder. Plugin JavaScript will then match for posts based on user input. More info and `search.json` customization documentation can be found in plugin repository.

**Base URL**

You can specify a custom base URL (eg. example.com/blog/) by adding the following line to `_config.yaml`. Note that there is no trailing slash on the URL.

```yaml
baseurl: "/blog"
```

**Language**

You can set the `lang` attribute of the `<html>` tag on your pages by changing the following line in `_config.yml`:

```yaml
plainwhite:
  html_lang: "en"
```

[See here for a full list of available language codes](https://www.w3schools.com/tags/ref_country_codes.asp)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/samarsault/plainwhite-jekyll. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `plainwhite.gemspec` accordingly.

## Donation
If this project help you reduce time to develop, you can give me a cup of coffee :) 

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/thelehhman)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## More themes

- [Texture](https://github.com/samarsault/texture)
