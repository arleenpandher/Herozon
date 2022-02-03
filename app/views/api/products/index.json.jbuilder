@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :title, :description, :service_id, :cost, :ratings 
        json.photoUrl url_for(product.photo)
    end
end

