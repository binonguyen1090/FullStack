# json.boards do
#   @boards.each do |board|
#     json.set! board.id do
#       json.extract! board, :id, :title, :user_id, :created_at
#       json.set! :numPins, board.pins.count
#       if !board.pins.empty? && board.pins.last.item.photo.attached?
#         json.photo url_for(board.pins.first.item.photo)
#       end
#       if !board.pins.empty?
#         json.lastEdited board.pins.last.updated_at
#       else
#         json.lastEdited board.created_at
#       end
#     end
#   end

# end

# json.array! @boards do |board|
#     json.extract! board, :id, :body, :user_id
# end

json.array! @boards, :title, :body
# json.boards do 
#     @boards.each do |board|
#         json.set! board, :id, :title, :user_id,
#     end
# end
