class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  has_many :decks
  has_many :faves, class_name: "Fave"
  has_many :cards

  def get_faves
    {
      id: id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      faves: faves.map { |fave| fave.deck }
    }
  end
end
