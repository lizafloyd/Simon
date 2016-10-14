class User < ApplicationRecord
  has_many :forks, dependent: :destroy
end
