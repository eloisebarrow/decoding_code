class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  has_many :decks
  has_many :faves, class_name: "Fave"
  has_many :cards

  def with_faves
    self.to_json( include: { faves: { include: { deck: { only: :img } } } } ) # when method is called, include faves as an array with each deck as an array within faves
  end
end
