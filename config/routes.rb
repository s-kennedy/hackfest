Rails.application.routes.draw do
  root to: 'site#index'
  match '/404', to: 'site#file_not_found', via: :all
  resources :contacts, only: [:create]
end
