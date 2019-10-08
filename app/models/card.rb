class Card < ApplicationRecord
  belongs_to :deck
  belongs_to :user, optional: true
end
