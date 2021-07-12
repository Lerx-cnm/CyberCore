class WelkController < ApplicationController

    def index 
        welk = Welk.all
        render json: welk.to_json(except: [:created_at, :updated_at])
    end

    def show 
        welk = Welk.find_by(user: params[:user])
        render json: welk.to_json(except: [:created_at, :updated_at])
    end
end