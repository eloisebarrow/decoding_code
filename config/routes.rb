Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  get '/decks/:id/cards', to: 'decks#card_by_deck'
  get '/faves', to: 'faves#index'

  resources :cards
  resources :decks do
    post '/faves', to: 'faves#create'
    delete '/faves/:id', to: 'faves#destroy' 
  end
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
