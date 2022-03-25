#
# Cookbook:: sample
# Recipe:: default
#
# Copyright:: 2022, The Authors, All Rights Reserved.
# package 'apache2' do
#   action :install
# end

# service 'httpd' do
#   action [ :enable, :start ]
# end

file '/var/www/html/index.html' do
  content 'hello bob'
  action :create
end