Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  get '/decks/:id/cards', to: 'decks#card_by_deck'
  
  get '/users/:id/faves', to: 'users#show_fave'

  resources :faves
  resources :cards
  resources :decks
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
