Rails.application.routes.draw do
  # get '/:locale' => 'site#index'

  scope "(:locale)", locale: /en|es/ do
    get '/:locale' => 'site#index'
    root to: 'site#index'
    match '/404', to: 'site#file_not_found', via: :all
    resources :applicants, only: [:index, :new, :create, :destroy]
  end
end
