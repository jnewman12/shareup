Rails.application.routes.draw do

  namespace :api do
    resources :shares 
  end

  devise_for :users,
        controllers: {
        omniauth_callbacks: "users/omniauth_callbacks",
        registrations: "users/registrations",
        sessions: "users/sessions"
      }

  devise_scope :user do
    #get '/api/current_user' => 'users/sessions#show_current_user'
    #post '/api/check/is_user' => 'users/users#is_user', as: 'is_user'

    post '/check/is_user' => 'users/users#is_user', as: 'is_user'
    post '/current_user' => 'users/sessions#get_current_user'
  end    

  get '/dashboard' => 'welcome#dashboard'
  root to:'welcome#index'    
end
