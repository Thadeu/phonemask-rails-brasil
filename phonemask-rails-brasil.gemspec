# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'phonemask/rails/brasil/version'

Gem::Specification.new do |spec|
  spec.name          = "phonemask-rails-brasil"
  spec.version       = Phonemask::Rails::Brasil::VERSION
  spec.authors       = ["Thadeu Esteves Jr"]
  spec.email         = ["tadeuu@gmail.com"]
  spec.license       = 'MIT'

  spec.summary       = %q{Simples Gem para máscara de telefone no brasil}
  spec.description   = %q{Cria máscara para telefones formatados no brasil, com nono digito.}
  spec.homepage      = "https://github.com/Thadeu/phonemask-rails-brasil"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  # if spec.respond_to?(:metadata)
  #   spec.metadata['allowed_push_host'] = "Set to 'http://mygemserver.com'"
  # else
  #   raise "RubyGems 2.0 or newer is required to protect against public gem pushes."
  # end

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
