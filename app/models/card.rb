class Card < ApplicationRecord
  belongs_to :deck
  belongs_to :user, optional: true

  validates :prompt, presence: true, uniqueness: true
  validates :answer, presence: true, uniqueness: true
end
