class UsersController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        # binding.pry
        if !params[:email] && !params[:login_key]
            if user && user.authenticate(params[:password])
                log_key = SecureRandom.hex
                # binding.pry
                user.update(acc_ass: log_key)
                # binding.pry
                render json: {good_cred: true, key: log_key, username: user.username}            
            else
                render json: {logged_in: false, error: "Can't seem to find this username or password, you probably misspelled it retard."}
                # binding.pry
            end
        elsif params[:login_key]
            user = User.find_by(acc_ass: params[:login_key])
            # binding.pry
            if user.acc_ass == params[:login_key]
                render json: {state: true}
            else 
                render json: {state: false}
            end
        end
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