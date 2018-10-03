json.partial! 'guest', guest: @guest
json.gifts @guest.gifts.each do |gift|
    json.partial! 'api/gifts/gift', gift: gift
end
