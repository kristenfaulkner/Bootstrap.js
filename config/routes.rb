NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  
  get '/about', :to => 'static_pages#about', as: :about_page
  get '/contact', :to => 'static_pages#contact', as: :contact_page
  get '/home', :to => 'static_pages#home', as: :home_page
  
  root :to => "users#show"
end
