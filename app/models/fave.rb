class Fave < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :deck, optional: true
end
