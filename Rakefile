desc "Build static site"
task :build do
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Run local web server"
task :run do
  system("middleman server -p 2111")
end

desc "Watch and compress Sass"
task :sass do
  system("cd source/assets/css && sass --watch styles.scss:styles.css --style compressed")
end

desc "Simple server"
task :serve_static do
  system("cd build && python -m SimpleHTTPServer 8888")
end
