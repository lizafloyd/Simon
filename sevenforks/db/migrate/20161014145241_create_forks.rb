class CreateForks < ActiveRecord::Migration[5.0]
  def change
    create_table :forks do |t|
      t.string :topic
      t.string :name
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
