class Deck < ApplicationRecord
  belongs_to :user, optional: true
  has_many :cards
  has_many :faves, class_name: "Fave"

  def self.with_faves
    Deck.all.to_json(include: :cards, faves: { include: { only: :id } } )
  end
end

