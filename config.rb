require 'uri'

configure :development do
  activate :livereload
end

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 8']
  config.cascade  = false
  config.inline   = true
end

set :url_root, ''
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :partials_dir, 'partials'
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true, autolink: true,
               footnotes: true, with_toc_data: true

activate :syntax, line_numbers: false
activate :directory_indexes

set :url_root, 'http://www.podologiafiorentina.it' # as http://demo1.cantierecreativo.net

helpers do
  def slugify(string)
    string.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  end

  def active_link_to(name, url, options = {})
    if current_page.url == url
      options[:class] = options.fetch(:class, '') + " is-active"
      link_to name, url, options
    else
      link_to name, url, options
    end
  end
end


configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash # invalida cache degli asset statici
  activate :search_engine_sitemap, default_priority: 0.5, default_change_frequency: "weekly"
end
