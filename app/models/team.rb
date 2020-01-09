class Team < ApplicationRecord
  validates :description, presence: true
  validates :title, presence: true, uniqueness: true

  has_many :projects,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :Project
end
