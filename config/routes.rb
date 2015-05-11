Rails.application.routes.draw do
  root to: 'site#index'
  resources :contacts, only: [:create]
end
