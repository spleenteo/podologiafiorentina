require 'uri'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

ignore '/templates/*'

activate :directory_indexes
# activate :asset_hash

webpack_command =
  if build?
    "yarn run build"
  else
    "yarn run dev"
  end

configure :development do
  activate :livereload
  activate :search_engine_sitemap,
           default_priority: 0.5,
           default_change_frequency: "weekly"
end

activate :external_pipeline,
  name: :webpack,
  command: webpack_command,
  source: ".tmp/dist",
  latency: 1

configure :build do
  activate :minify_html do |html|
    html.remove_input_attributes = false
  end
  activate :search_engine_sitemap,
    default_priority: 0.5,
    default_change_frequency: 'weekly'
end

set :url_root, ''
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true, autolink: true,
               footnotes: true, with_toc_data: true

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

  def find_patology(code)
    data.patologies.find { |code|
      patology.code == code
    }
  end

end
