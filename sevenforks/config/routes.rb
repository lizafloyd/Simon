Rails.application.routes.draw do
  get 'resources/index'

  get 'resources/show'

  get 'resources/new'

  get 'resources/edit'

  get 'forks/index'

  get 'forks/show'

  get 'forks/new'

  get 'forks/edit'

  get 'users/index'

  get 'users/show'

  get 'users/new'

  get 'users/edit'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root to: "users#index"

   resources :users do
     resources :forks
   end
   resources :resources
end
