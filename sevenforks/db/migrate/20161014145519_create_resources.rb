class CreateResources < ActiveRecord::Migration[5.0]
  def change
    create_table :resources do |t|
      t.string :text
      t.string :source_url
      t.references :fork, foreign_key: true

      t.timestamps
    end
  end
end
