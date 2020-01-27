# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name = "plainwhite"
  spec.version = "1.0"
  spec.authors = ["Bennie Mosher"]
  spec.email = ["benniemosher@gmail.com"]

  spec.summary = "A portfolio style jekyll theme for writers"
  spec.homepage = "https://benniemosher.com/"
  spec.license = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|404.html|sitemap.xml)!i) }

  spec.add_runtime_dependency "jekyll", ">= 3.7.3"
  spec.add_runtime_dependency "jekyll-seo-tag", ">= 2.1.0"
  spec.add_runtime_dependency "jekyll-archives", ">= 2.2.1"
  spec.add_runtime_dependency "jekyll-menus", ">= 0.6.1"
  spec.add_runtime_dependency "jekyll-minifier", ">= 0.1.2"

  spec.add_development_dependency "bundler", "> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
