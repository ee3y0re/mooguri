Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :products, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resources :reviews
  end

  root to: 'static_pages#root'
end
