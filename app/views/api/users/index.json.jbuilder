@users.each do |dude|
  json.set! dude.id do
    json.extract! dude, :id, :username
  end
end