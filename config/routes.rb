Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create]
    resources :projects, only: [:index, :create, :new, :edit, :show, :update]
    resource :session, only: [:new, :create, :destroy]
    resources :project_memberships, only: [:create]
  end

  root to: 'static_pages#root'
end
