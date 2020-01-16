@sections.each do |section|
  json.set! section.id do
    json.partial! 'section', section: section
  end
end