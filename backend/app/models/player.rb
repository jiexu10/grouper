class Player < ActiveRecord::Base
  validates :username, presence: true
end
