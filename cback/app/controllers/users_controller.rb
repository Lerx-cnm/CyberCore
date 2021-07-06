class UsersController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        # binding.pry
        if !params[:email]
            if user && user.authenticate(params[:password])
                render json: {logged_in: true}            
            else
                render json: {logged_in: false, error: "Can't seem to find this username or password, you probably misspelled it retard."}
            end
        end
        # if params[:username]
        #     render json: {state: true}
            
        # else
        #     render json: {state: false}
        # end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user.to_json(except: [:created_at, :updated_at, :password_digest])
    end

    def index
        users = User.all
        # binding.pry
        render json: users.to_json(except: [:created_at, :updated_at, :password_digest])
    end
end