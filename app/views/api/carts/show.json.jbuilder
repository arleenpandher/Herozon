
    json.extract! @cart_item, :user_id, :quantity
    json.cart_id @cart_item.id
    json.extract! @product, :title, :description, :id, :cost, :ratings, :about  
    json.photoUrl url_for(@product.photo)