class Deck < ApplicationRecord
  belongs_to :user, optional: true
  has_many :cards
  has_many :faves
end
