class Api::CartsController < ApplicationController

    def create
        @cart_item = Cart.new(cart_params)
        @cart_item.user_id = current_user.id
        if @cart_item.save
            @product = @cart_item.product 
            render :show
        else 
            render json: @product.errors.full_messages, status: 422
        end 
    end

    def index
        @session_user = current_user
        @products = current_user.cart_products 
        render :index
    end


    private 
    def cart_params 
        params.require(:cart).permit(:product_id, :quantity)
    end

end
