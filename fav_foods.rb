def fav_foods
  food_array = []
  3.times do
    puts "Name a favourite food"
    food_array << gets.chomp
  end
  p food_array
end
fav_foods
