class Welk < ApplicationRecord
    belongs_to :user
    has_many :work
end