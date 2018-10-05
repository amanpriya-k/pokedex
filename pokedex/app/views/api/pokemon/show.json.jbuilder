json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
    json.image_url asset_path(@pokemon.image_url)
  # json.moves json.array! @pokemon.moves do |move|
  # end
end

if @pokemon.items
  json.items do
   @pokemon.items.each do |item|
      json.set! item.id do
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness
          json.image_url asset_path(item.image_url)
      end
    end
  end
else
  json.items do
    json.array! []
  end
end
