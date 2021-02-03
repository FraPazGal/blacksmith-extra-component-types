'use strict';

module.exports = {
  DokuwikiPlugin: require('./dokuwiki-plugin'),
  DrupalPlugin: require('./drupal-plugin'),
  GoProject: require('./go-project'),
  HarborComponent: require('./harbor-component').HarborComponent,
  HarborGoComponent: require('./harbor-component').HarborGoComponent,
  JavaApplication: require('./java-application'),
  Java8Application: require('./java-application/java8'),
  Java15Application: require('./java-application/java15'),
  NginxModule: require('./nginx-module'),
  Node10Application: require('./node-application'),
  Node12Application: require('./node-application/node12'),
  Node13Application: require('./node-application/node13'),
  Node14Application: require('./node-application/node14'),
  NodeApplication: require('./node-application'),
  PeclComponent: require('./pecl-component'),
  PeclPHP71Component: require('./pecl-component/pecl-php71'),
  PeclPHP72Component: require('./pecl-component/pecl-php72'),
  PHP71Application: require('./php-application/php71'),
  PHP72Application: require('./php-application/php72'),
  PHP73Application: require('./php-application'),
  PHP74Application: require('./php-application/php74'),
  PHPApplication: require('./php-application'),
  Ruby24Application: require('./ruby-application'),
  Ruby25Application: require('./ruby-application/ruby25'),
  Ruby26Application: require('./ruby-application/ruby26'),
  Ruby27Application: require('./ruby-application/ruby27'),
  RubyApplication: require('./ruby-application'),
  WordPressPlugin: require('./wordpress-plugin'),
};
