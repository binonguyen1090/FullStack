Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :searchs, only: [:index]
    resources :users do
      resources :pins, only: [:index]
      resources :boards, only: [:index]
    end


    resources :boards do 
      resources :pins, only: [:index]
    end 

    resources :pins do 
      # resources :likes, only: [:index]
    end
    resources :likes, only: [:create]
    delete "/likes", to: "likes#destroy"
    resources :follows, only: [:create, :index]
    
    delete "/follows", to: "follows#destroy"
    
    resource :session, only: [:create, :destroy]

    get "/boards/:boardId/:pinId", to: "boards#move"
  end
end
