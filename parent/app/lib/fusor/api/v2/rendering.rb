#
# Copyright 2015 Red Hat, Inc.
#
# This software is licensed to you under the GNU General Public
# License as published by the Free Software Foundation; either version
# 2 of the License (GPLv2) or (at your option) any later version.
# There is NO WARRANTY for this software, express or implied,
# including the implied warranties of MERCHANTABILITY,
# NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
# have received a copy of GPLv2 along with this software; if not, see
# http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.

module Fusor
  module Api
    module V2
      module Rendering
        def respond_for_show(options = {})
          respond_with_template_resource(options[:template] || 'show', options[:resource_name] || controller_name,
                                         options)
        end

        def respond_for_index(options = {})
          try_specific_collection_template(options[:template] || params[:action], params[:action], options)
        end

        def respond_for_create(options = {})
          try_specific_resource_template(options[:template] || params[:action], params[:action], options)
        end

        def respond_for_update(options = {})
          try_specific_resource_template(options[:template] || params[:action], params[:action], options)
        end

        def respond_for_destroy(options = {})
          try_specific_resource_template(options[:template] || params[:action], params[:action], options)
        end

        def respond_for_status(options = {})
          try_specific_resource_template(options[:template] || params[:action], "status", options)
        end

        def respond_for_async(options = {})
          options[:status] ||= 202
          try_specific_resource_template(options[:template] || params[:action], "async", options)
        end

        def respond_with_template(action, resource_name, options = {}, &_block)
          yield if block_given?
          status = options[:status] || 200

          render :template => "fusor/api/v2/#{resource_name}/#{action}",
                 :status => status,
                 :locals => { :object_name => options[:object_name],
                              :root_name => options[:root_name] },
                 :layout => "fusor/api/v2/layouts/#{options[:layout]}"
        end

        def respond_with_template_resource(action, resource_name, options = {})
          options[:layout] ||= "resource"
          options[:object_name] = params[:object_name]
          respond_with_template(action, resource_name, options) do
            @resource = options[:resource] unless options[:resource].nil?
            @resource = resource if @resource.nil?
          end
        end

        def respond_with_template_collection(action, resource_name, options = {})
          options[:layout] ||= "collection"
          options[:root_name] = params[:root_name] || "results"
          respond_with_template(action, resource_name, options) do
            @collection = options[:collection] unless options[:collection].nil?
            @collection = resource_collection if @collection.nil?
          end
        end

        def try_specific_resource_template(action, common_action, options = {})
          respond_with_template_resource(action, controller_name, options)
        rescue ActionView::MissingTemplate
          respond_with_template_resource(common_action, "common", options)
        end

        def try_specific_collection_template(action, common_action, options = {})
          respond_with_template_collection(action, controller_name, options)
        rescue ActionView::MissingTemplate
          respond_with_template_collection(common_action, "common", options)
        end
      end # module Rendering
    end # module V2
  end # module Api
end # module Fusor
