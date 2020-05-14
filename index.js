'use strict';

module.exports = {
  RubyApplication: require('./ruby-application'),
  Ruby24Application: require('./ruby-application'),
  Ruby25Application: require('./ruby-application/ruby25'),
  Ruby26Application: require('./ruby-application/ruby26'),
  Ruby27Application: require('./ruby-application/ruby27'),
  NginxModule: require('./nginx-module'),
  NodeApplication: require('./node-application'),
  Node10Application: require('./node-application'),
  Node12Application: require('./node-application/node12'),
  Node13Application: require('./node-application/node13'),
  Node14Application: require('./node-application/node14'),
  PHPApplication: require('./php-application'),
  PHP71Application: require('./php-application/php71'),
  PHP72Application: require('./php-application/php72'),
  PHP73Application: require('./php-application'),
  PHP74Application: require('./php-application/php74'),
  PeclComponent: require('./pecl-component'),
  PeclPHP71Component: require('./pecl-component/pecl-php71'),
  PeclPHP72Component: require('./pecl-component/pecl-php72'),
  GoProject: require('./go-project'),
  WordPressPlugin: require('./wordpress-plugin'),
  HarborComponent: require('./harbor-component'),
};
