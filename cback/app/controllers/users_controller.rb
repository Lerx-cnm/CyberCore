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

        elsif params[:email]
            user = User.find_by(username: params[:username])
            pass = params[:password].split("")
            # binding.pry
            if user
                render json: {resp: "Bro, what are you, like stupid or something? We already have the username."}
            elsif !(pass.length() > 7) || !(pass.any? { |c| ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].include?(c)})
                render json: {resp: "Okay, I won't call you an idiot for this one, since I didn't tell you the password requirements, but it should be common sense."}
            elsif (params[:email] || params[:username] || params[:password]) == ""
                render json: {resp: "Bro.. seriously? It's not that hard to put info in."}
            elsif user = User.create(password: params[:password], username: params[:username], email: params[:email])
                # binding.pry
                render json: {resp: "Ooh look at you go, you did it. yay....... what are you still here for? Refresh the page and login you bozo."}
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