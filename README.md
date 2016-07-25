# Phonemask::Rails::Brasil

jQuery Plugin for mask phone number until 9 numbers.
Only for brazil numbers.

[![Gem Version](https://badge.fury.io/rb/phonemask-rails-brasil.svg)](https://badge.fury.io/rb/phonemask-rails-brasil)

## Dependecies

Use in Ruby >= 1.9 and Ruby on Rails >= v4.X

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'phonemask-rails-brasil', '0.2.0'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install phonemask-rails-brasil -v '0.2.0'

## Usage

```javascript
//= require jquery.phonemask
```
Create data attribute in HTML tag.

```html
<input type="text" data-phone-mask="true">
```

if you used SimpleForm, use:
```ruby
<%= f.input :telefone, input_html:{ data: {"phone-mask": true} } %>
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Thadeu/phonemask-rails-brasil.
