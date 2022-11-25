Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :products, only: [:index, :show]
    resource :session, only: [:create, :destroy] #one
    resources :reviews, except: [:new, :edit]
    resources :carts, only: [:index, :show, :create, :update, :destroy] #multiple
    resources :categories, only: [:index, :show]
  end

  root to: 'static_pages#root'
end
