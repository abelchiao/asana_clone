# == Schema Information
#
# Table name: teams
#
#  id          :bigint           not null, primary key
#  description :text             default(""), not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_teams_on_title  (title) UNIQUE
#

class Team < ApplicationRecord
  validates :description, presence: true
  validates :title, presence: true, uniqueness: true

  has_many :projects,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :Project
end
