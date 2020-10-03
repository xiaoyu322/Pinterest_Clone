Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

    namespace :api, default: {format: :json} do 
      resources :users, only: [:show, :create, :index] do 
        resources :boards, only: [:create, :destroy, :show, :index]
      end
      resources :follows, only: [:create, :destroy, :show, :index]
      resource :session, only: [:create, :destroy]
      resources :pins, only: [:create, :show, :index, :destroy]
      resources :pin_boards, only: [:index, :create, :destroy]
    end
end
