Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create]
    resources :projects, only: [:index, :create, :show, :update, :destroy]
    resources :sections, only: [:index, :create, :show, :update, :destroy]
    resources :tasks, only: [:index, :create, :show, :update, :destroy]
    # resources :project_memberships, only: [:create]
    resource :session, only: [:new, :create, :destroy]
  end

  root to: 'static_pages#root'
end
