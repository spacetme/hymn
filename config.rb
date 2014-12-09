activate :relative_assets

activate :autoprefixer do |config|
  config.browsers = ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
end

activate :deploy do |deploy|
  deploy.method = :git
end

configure :build do
  activate :minify_css
  ignore 'jspm_packages/*'
end

after_build do
  system "./postbuild"
end
